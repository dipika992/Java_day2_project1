var total=0;
var count=0;
while(count<5)
{
    var marks=prompt("Enter your marks,")
    document.write("The marks is "+marks+"<br>")
    total=total+marks;
    count++;
}
document.write(total)