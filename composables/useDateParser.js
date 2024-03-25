export default function (date, format = 'long') {
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const currentDate = new Date(date);
    const dayOfMonth = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const month = months[monthIndex];
    const year = currentDate.getFullYear();

    let formatted_date;
    if (format === 'long') {
        formatted_date =  `${dayOfMonth} de ${month}, ${year}`
    }else if (format === 'short') {
        formatted_date = `${dayOfMonth}/${(monthIndex + 1) <= 9 ? '0'+(monthIndex + 1) : (monthIndex + 1)}/${year}`;
    } else {
        formatted_date = 'ERROR: unknown format'
    }
    return formatted_date;
}