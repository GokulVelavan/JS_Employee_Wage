const IS_FullTime = 1;
const IS_PartTime = 2;
const PART_TIME_HOURS= 4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=10;
const MAX_HRS_IN_MONTH=100;

function calDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}

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
                    
                    let totalEmpHrs= 0;
                    let totalWorkingDays=0;
                    let empDailyWageArr=new Array()

                    while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
                    {
                        totalWorkingDays++;
                        let empCheck = Math.floor(Math.random()*10)%3;
                        let empHrs=getWorkingHours(empCheck);
                        totalEmpHrs+=empHrs;
                        empDailyWageArr.push(calDailyWage(empHrs));
                    }
                    let empWage =calDailyWage(totalEmpHrs);
                  console.log("total days ",totalWorkingDays,"total hrs",totalEmpHrs, "the Employee wage is "+ empWage);