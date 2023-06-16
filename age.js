// var dateObj = new Date();
// var month = dateObj.getMonth()+1;
// var day = dateObj.getDate();
// var year = dateObj.getFullYear();

// var date = document.getElementById("Date").value
// var birthmonth = document.getElementById("Months").value
// var YearOfBirth = document.getElementById("BirthYear").value

function agecalc(){

var dateObj = new Date();
var month = dateObj.getMonth()+1;
var day = dateObj.getDate();
var year = dateObj.getFullYear();

var date = document.getElementById("Date").value;
var birthmonth = document.getElementById("Months").value;
var YearOfBirth = document.getElementById("BirthYear").value;

if(date && birthmonth && YearOfBirth){
    if((0 != YearOfBirth) && (year >= YearOfBirth)){
        if((0 == YearOfBirth % 4) && (0 != YearOfBirth % 100) || (0 == YearOfBirth % 400)){
          
            if((0 != birthmonth) && (12 >= birthmonth)){
                if(2 == birthmonth){
                    if((0 != date) && (29 >= date)){
                        if(date == day){
                            var Days = day - date;
                            if(birthmonth == month){
                                var Months = month - birthmonth;
                                alert("According to your Date of birth , Today is your Birthday HAPPY BIRTHDAY TO YOU  ");
                                if(YearOfBirth == year){
                                    var Years = year - YearOfBirth;
                                    alert("New Born Babby");
                                }
                                else{
                                    if(year > YearOfBirth){
                                        var Years = year - YearOfBirth;
                                    }
                                    else{
                                        alert(" Invalid Year you have entered");
                                    }
                                }
                            }
                            else{
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                        }
                        else{
                        if(date > day){
                            if((2 == month) || (4 == month) || (6 == month) || (9 == month) || (11 == month)){
                                var Days = (day - date) + 31;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                
                            }
                            else if(3 == month){
                                var Days = (day - date) + 29;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else{
                                var Days = (day - date) + 30;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                };
                            }
                        }
                        else{
                            var Days = day - date;
                                    if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                        }
                    }
                }
                    else{
                        alert("only under 29");
                    }
                 }
                else if((1 == birthmonth) || (3 == birthmonth) || (5 == birthmonth) || (7 == birthmonth) || (8 == birthmonth) || (10 == birthmonth) || (12 == birthmonth)){
                    if((0 != date) && (31 >= date)){ 
                        if(date > day){
                            if((2 == month) || (4 == month) || (6 == month) || (9 == month) || (11 == month)){
                                var Days = (day - date) + 31;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else if(3 == month){
                                var Days = (day - date) + 29;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else{
                                var Days = (day - date) + 30;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                        }
                        else{
                            var Days = day - date;
                            if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                        }
                    }
                    else{
                        alert("only under 31");
                    }
                }
                else{
                    if((0 != date) && (30 >= date)){
                        if(date > day){
                            if((2 == month) || (4 == month) || (6 == month) || (9 == month) || (11 == month)){
                                var Days = (day - date) + 31;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else if(3 == month){
                                var Days = (day - date) + 29;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else{
                                var Days = (day - date) + 30;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                        }
                        else{
                            var Days = day - date;
                            if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                        }
                    }
                    else{
                        alert("only under 31");
                    }
                }
            }
            else{
                alert("Month is not valid");
            }
        }
        else if((1 == YearOfBirth % 4) || (2 == YearOfBirth % 4) ||(3 == YearOfBirth % 4) && (4 != YearOfBirth % 100) || (100 == YearOfBirth % 400) || (200 == YearOfBirth % 400) || (300 == YearOfBirth % 400)){
            if(date == 29){
                alert("This is not leap year");
            }
            else{
            if((0 != birthmonth) && (12 >= birthmonth)){
                if(2 == birthmonth){
                    if((0 != date) && (28 >= date)){
                         if(date == day){
                            var Days = day - date;
                            //Days == 0;
                            alert("  ");
                            if(birthmonth == month){
                                var Months = month - birthmonth;
                                //Months == 0;
                                alert("According to your Date of birth , Today is your Birthday HAPPY BIRTHDAY TO YOU  ");
                                if(YearOfBirth == year){
                                    var Years = year - YearOfBirth;
                                    //years = 0;
                                    alert("New Born Babby")
                                }
                                else{
                                    if(year > YearOfBirth){
                                        var Years = year - YearOfBirth;
                                    }
                                    else{
                                        alert(" Invalid Year you have entered");
                                    }
                                }
                            }
                            else{
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                        }
                        else{
                        if(date > day){
                            if((2 == month) || (4 == month) || (6 == month) || (9 == month) || (11 == month)){
                                var Days = (day - date) + 31;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                
                            }
                            else if(3 == month){
                                var Days = (day - date) + 28;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else{
                                var Days = (day - date) + 30;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                };
                            }
                        }
                        else{
                            var Days = day - date;
                            if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                        }
                    }
                    }
                    else{
                        alert("only under 28");
                    }
                 }
                else if((1 == birthmonth) || (3 == birthmonth) || (5 == birthmonth) || (7 == birthmonth) || (8 == birthmonth) || (10 == birthmonth) || (12 == birthmonth)){
                    if((0 != date) && (31 >= date)){ 
                        if(date > day){
                            if((2 == month) || (4 == month) || (6 == month) || (9 == month) || (11 == month)){
                                var Days = (day - date) + 31;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else if(3 == month){
                                var Days = (day - date) + 28;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else{
                                var Days = (day - date) + 30;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                        }
                        else{
                            var Days = day - date;
                            if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                        }
                    }
                    else{
                        alert("only under 31");
                    }
                }
                else{
                    if((0 != date) && (30 >= date)){
                        if(date > day){
                            if((2 == month) || (4 == month) || (6 == month) || (9 == month) || (11 == month)){
                                var Days = (day - date) + 31;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else if(3 == month){
                                var Days = (day - date) + 28;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                            else{
                                var Days = (day - date) + 30;
                                month = month -1;
                                if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                            }
                        }
                        else{
                            var Days = day - date;
                            if(birthmonth > month){
                                    var Months = (month - birthmonth) + 12;
                                    var Years = (year - YearOfBirth) - 1;;
                                }
                                else{
                                    var Months = month - birthmonth;
                                    var Years = year - YearOfBirth;
                                }
                        }
                    }
                    else{
                        alert("only under 31");
                    }
                }
            }
            else{
                alert("Month is not valid");
            }
        }
            
        }
        else{
            alert("Error");
        }
     }
    else{
        alert("Year is not valid");
    }
    alert("You becomes " + Years + " years " + Months + " months and " + Days + " days old ");
    if((Years == 0) && (Months == 0) && (Days == 0)){
        alert("Congratulation for new born babby");
    }
    if((Months == 0) && (Days == 0)){
        alert(" Today is Your birthday , Happy Birthday to You");
    }

}


}


   

agecalc();
