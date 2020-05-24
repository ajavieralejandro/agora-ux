export default class CalendarUtils {
  constructor() {
    this.today = new Date();
    this.days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sabado"
    ];
  }

  getMonthName() {
    switch (this.today.getMonth()) {
      case 1:
        return "Enero";
      case 2:
        return "Febrero";
      case 3:
        return "Marzo";
      case 4:
        return "Abril";
      case 5:
        return "Mayo";
      case 6:
        return "Junio";
      case 7:
        return "Julio";
      case 8:
        return "Agosto";
      case 9:
        return "Septiembre";
      case 10:
        return "Octure";
      case 11:
        return "Noviembre";
      case 12:
        return "Diciembre";

      default:
        return "Error";
    }
  }

  getDayNumber(dayNumber, firstDay, cont) {}

  getFirstDay() {
    let aux = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    return aux.getDay();
  }

  getMonthDays() {
    let month = this.today.getMonth();
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    )
      return 31;
    else return 30;
  }

  getTodayDayString() {
    return this.days[this.today.getDay()];
  }

  getTodayDayNumber() {
    return this.today.getDate();
  }
}
