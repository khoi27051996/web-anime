const changeTypeTime = (date: string) => {
    const inputdaDateTime = new Date(date);
    const day = inputdaDateTime.getDate();
    const month = inputdaDateTime.getMonth();
    const year = inputdaDateTime.getFullYear();
    const outputDateTime = new Date(year, month, day);
    const outputDateTimeStr = outputDateTime.toLocaleDateString("en-US");
    return outputDateTimeStr
}

export { changeTypeTime }