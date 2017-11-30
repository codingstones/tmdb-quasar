/* eslint-disable eqeqeq */
import { createFakeDays } from '../services/__mocks__/create-fake-gig'

export class Gig {
  constructor(args) {
    Object.assign(this, args)
  }
}

export class GigService {
  constructor(matcher) {
    this._gigs = []
    this._gigs_by_day = []
    this._matcher = matcher
  }

  retrieveNextGigs() {
    const days = createFakeDays()
    Object.keys(days).forEach((date) => this._gigs.push(...days[date].gigs))
    return Promise.resolve(days)
  }

  retrieveAGig(id) {
    return new Promise((resolve, reject) => {
      let gig = this._gigs.find((gig) => { return (gig.id == parseInt(id)) })

      if (gig) {
        resolve(gig)
      }
      else {
        throw Error('Gig not found')
      }
    })
  }

  searchGigsGroupedByDay(term) {
    return new Promise((resolve, reject) => {
      const daysWithGigs = []
      this._gigs_by_day.forEach((day) => {
        const gigs = day.gigs
          .filter((gig) => {
            return this._gigIsMatching(gig, term)
          }).map((gig) => {
            return new Gig(gig)
          })

        if (gigs.length > 0) {
          daysWithGigs.push({day: day.day, gigs: gigs})
        }
      })
      resolve(daysWithGigs)
    })
  }

  searchGigs(term) {
    return new Promise((resolve, reject) => {
      let matches = []
      this._gigs.forEach((gig) => {
        if (this._gigIsMatching(gig, term)) {
          matches.push(new Gig(gig))
        }
      })
      resolve(matches)
    })
  }

  _gigIsMatching(gig, term) {
    return this._matcher.hasTheTerm(gig.title, term) || this._matcher.hasTheTerm(gig.place, term)
  }
}

export class Matcher {
  constructor() {
    this.FROM = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛ'
    this.TO = 'AAAAAEEEEIIIIOOOOUUUU'
  }

  hasTheTerm(text, term) {
    if (text) {
      text = this.normalize(text.toUpperCase())
      term = this.normalize(term.toUpperCase())
      return (text.indexOf(term) > -1)
    }
  }

  normalize(aString) {
    this.FROM.split('').forEach((changeFrom, index) => {
      const changeTo = this.TO[index]
      aString = aString.replace(changeFrom, changeTo)
    })
    return aString
  }
}
