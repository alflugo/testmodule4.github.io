var names=new Array();
names[0]="Yaakov";
names[1]="alfredo";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="byan";
names[6]="larry";
names[7]="peter";
names[8]="laura";
names[9]="jhon";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}