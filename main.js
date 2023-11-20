class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
      this.licenseID = licenseID;
    }
  }
  
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  
  let reservations = [];
  
  
  let car1 = new Car("Car 1", "Manufacturer 1", 1, "Gas");
  let car2 = new Car("Car 2", "Manufacturer 2", 2, "Electric");
  let car3 = new Car("Car 3", "Manufacturer 3", 3, "Gas");
  
  let plane1 = new Plane("Plane 1", "Manufacturer 4", 4, "Commercial");
  let plane2 = new Plane("Plane 2", "Manufacturer 5", 5, "Private");
  
  
  function checkAndReserve(employeeId, vehicleId) {
    let employee = reservations.find((emp) => emp.id === employeeId);
    let vehicle = reservations.find((veh) => veh.id === vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Mismatch: Pilot cannot be assigned to a car.");
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
      console.log("Mismatch: Driver cannot be assigned to a plane.");
    } else {
      let reservation = new Reservation(
        new Date(),
        employeeId,
        vehicleId,
        reservations.length + 1
      );
      reservations.push(reservation);
      console.log("Reservation successful:", reservation);
    }
  }
  
 
  checkAndReserve(1, 1); // Mismatch: Pilot cannot be assigned to a car.
  checkAndReserve(4, 5); // Mismatch: Driver cannot be assigned to a plane.
  checkAndReserve(2, 4); // Reservation successful: [Object]
  
 
  console.log("Reservations:");
  reservations.map((reservation) => console.log(reservation));
  