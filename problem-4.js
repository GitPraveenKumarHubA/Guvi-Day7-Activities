class UberFare {
  constructor(Distance, duration) {
    this.Distance = Distance; // in KM
    this.duration = duration; // in Minutes
  }

  calculatePrice() {
    let baseFare = 25;
    let costPerMin = 2;
    let costPerKM = 10;
    let bookingFee = 10;

    let fare = baseFare + costPerMin * this.duration + costPerKM * this.Distance + bookingFee;
    console.log("Uber fare price:", fare);
  }
}

let uber1 = new UberFare(20, 40);
uber1.calculatePrice();
