const IS_FullTime = 1;
const IS_PartTime = 2;
const PART_TIME_HOURS= 4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs= 0;
let empCheck = Math.floor(Math.random()*10)%3;

switch (empCheck)
            {
                case IS_PartTime:
                    empHrs = PART_TIME_HOURS;
                    break;

                case IS_FullTime:
                    empHrs = FULL_TIME_HOURS;
                    break;


                default:
                    empHrs = 0;
                    break;
            }
     
            let empWage = WAGE_PER_HOUR * empHrs;
             console.log("the Employee age is "+ empWage);