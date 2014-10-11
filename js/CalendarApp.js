var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Calendar() {
	this.today = new Date();
	this.numberDays = new Date(this.today.getYear(),this.today.getMonth()-1,0).getDate();
	
	this.yesterday = new Date();
	this.tomorrow = new Date();
}

function getTodayDate() {
	return new Date();
}
