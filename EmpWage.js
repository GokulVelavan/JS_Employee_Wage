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




                  let totEmpWage=0;
                  function sum(dailywage){
                      totEmpWage+=dailywage;
                  }
                  empDailyWageArr.forEach(sum);
                  console.log("UC7A-total days ",totalWorkingDays,"total hrs",totalEmpHrs, "the Employee wage is "+ totEmpWage);

                
                  function totalWages(totalwage,dailywage)
                  {
                      return totalwage + dailywage;
                  }
               
                  console.log("UC7A -Wage with reduce",empDailyWageArr.reduce(totalWages,0));
                  

                  let dailyCntr=0;
                  function mapDayWithWage(dailywage)
                  {
                      dailyCntr++;
                      return dailyCntr + "= "+dailywage;
                  }
                  let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
                  console.log("UC7B-Daily Wage Map");
                  console.log(mapDayWithWageArr);


                  function fulltimeWage(dailywage)
                  {
                      return dailywage.includes("160");
                  }
                  let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
                  console.log("UC7C -Daily Wage FILTER when FULLtime wage Earned");
                  console.log(fullDayWageArr);


                  //UC 7D

                  function findFulltimeWAGE(dailyWage)
                  {
                      return dailyWage.includes("160");
                  }
                  console.log("UC7D -First Time  FULLtime wage Earned",mapDayWithWageArr.find(findFulltimeWAGE));

                  //UC-7E

                  function isAllFulltimeWage(dailyWage)
                  {
                      return dailyWage.includes("160");
                  }
                  console.log("UC7E -Check all Element has full time wage",fullDayWageArr.every(isAllFulltimeWage));
               

                  //UC-7F
                  function isAnyPartTimeWage(dailyWage)
                  {
                      return dailyWage.includes("160");
                  }
                  console.log("UC7E -Check if Any Element has part time wage",mapDayWithWageArr.some(isAnyPartTimeWage));
               

                  //UC7G 
                  function totalDaysWorked(numOfDays,dailyWage)
                  {
                      if(dailyWage>0) return numOfDays+1;
                      return numOfDays;
                  }
                  console.log("UC-7G Number of Days Emp Worked",empDailyWageArr.reduce(totalDaysWorked,0));

           
