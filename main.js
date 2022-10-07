// Build a Ford Fever
//  This functions builds a chassis (no input, outputs new chassis object)

const createChassis = () => {
    const newChassisObject = {}

    return newChassisObject
}

// This function will add 4 wheels to chassis (input is a chassis, output is chassis with wheels)

const addWheels = (object) => {                    
    object.wheels = 4

    return object
}

const newCarStep1 = createChassis()
const newCarWithWheels = addWheels(newCarStep1)
console.log(newCarWithWheels)


// This functions will add an engine to chassis (input is a chassis, output is chassis with an engine)

const addEngine = (object) => {
    object.engine = "4.8L"

    return object
}

const newCarStep2 = createChassis()
const newCarWithEngine = addEngine(newCarStep2)

console.log(newCarWithEngine)



// This function will add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)

const addSteeringWheel = (object) => {
    object.steeringWheel = "Tilting"

    return object
}

const newCarStep3 = createChassis()
const newCarWithSteeringWheel = addSteeringWheel(newCarStep3)

console.log(newCarWithSteeringWheel)


// This function adds a body to chassis (input is a chassis, output is chassis with a body)

const  addBody = (object) => {
    object.body = "Fever"

    return object
}

const newCarStep4 = createChassis()
    const newCarWithBody = addBody(newCarStep4)

    console.log(newCarWithBody)


// This function adds a drive train to chassis (input is a chassis, output is chassis with a drive train)

const addDriveTrain = (object) => {
    object.driveTrain = "Two wheel drive"

    return object
}

const newCarStep5 = createChassis()
const newCarWithDriveTrain = addDriveTrain(newCarStep5)   

console.log(newCarWithDriveTrain)