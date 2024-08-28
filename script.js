function getmarks() {
    var name = document.getElementById("name").value;
    var Java = Number(document.getElementById("Java").value);
    var english = Number(document.getElementById("english").value);
    var physics = Number(document.getElementById("physics").value);
    var dbms = Number(document.getElementById("dbms").value);
    var maths = Number(document.getElementById("maths").value);
    var cn = Number(document.getElementById("cn").value);
    var totalmarks = 600;
    var obtainedmarks = physics+dbms+maths+cn+Java+english;
    var percentage = (obtainedmarks/totalmarks) * 100;
    var grade;

    document.getElementById("percentage").innerHTML = percentage;

    if(percentage > 90) {
        grade = "A+";
    } else if(percentage < 90 && percentage > 80) {
        grade = "A";
    }  else if(percentage < 80 && percentage > 70) {
        grade = "B+";
    } else if(percentage < 70 && percentage > 55) {
        grade = "B";
    } else if(percentage < 55 && percentage > 40) {
        grade = "C+";
    } else if(percentage < 50 && percentage > 35) {
        grade = "C";
    } else if(percentage < 35) {
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("obtainedmarks").innerHTML = obtainedmarks;

    if(percentage < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
    }
     else
     document.getElementById("result").innerHTML = "Congratulations " + name + " you have passed this exam. You are promoted.";


     if(Java < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
     }

     if(english < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
     }

     if(maths < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
     }

     if(physics < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
     }

     if(dbms < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
     }

     if(cn < 35) {
     document.getElementById("result").innerHTML = "Sorry " + name + ", You have failed in this exam. Please try again.";
     document.getElementById("result_bg").classList.add("bg-danger");
     }

}

function reset() {
    location.reload();
}
