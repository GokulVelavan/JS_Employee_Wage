const IS_FullTime = 1;
const IS_PartTime = 2;
const PART_TIME_HOURS= 4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;

function getWorkingHours(empCheck)
{
    
    switch (empCheck)
    {
        case IS_PartTime:
            return PART_TIME_HOURS;
        case IS_FullTime:
            return FULL_TIME_HOURS;
         default:
            return 0;
      }
}
                    
                    let empHrs= 0;
                    for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
                    {
                        let empCheck = Math.floor(Math.random()*10)%3;
                        empHrs+=getWorkingHours(empCheck);

                    }
                    let empWage = WAGE_PER_HOUR * empHrs;
             console.log("the Employee wage is "+ empWage);