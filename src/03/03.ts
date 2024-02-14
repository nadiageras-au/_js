import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType} from "../02/02_02";

export function addSkill(student:StudentType, skill:string) {
    student.technologies.push({id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(stud:StudentType) {
    stud.isActive = true;
}

export function doesStudentLiveIn(stud:StudentType, title:string) {
    return stud.address.city.title === title
}

export function addMoneyToBudget(building:GovernmentBuildingsType, budget:number) {
 building.budget += budget;
}

export function repairHouse(city: CityType) {
    city.houses.map((el)=>el.repaired=true);
}

export function toFireStaff(city: CityType, count:number) {
    //city.governmentBuildings.map((el)=>el.staffCount+=count)
    city.governmentBuildings[0].staffCount-=count;
}

export const toHireStaff = (building: GovernmentBuildingsType, countStaff:number)=>{
    //city.governmentBuildings.map((el)=> el.staffCount+=count)
    building.staffCount+=countStaff;
}