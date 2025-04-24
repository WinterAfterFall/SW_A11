ใช้พื้นที่เก็บข้อมูลไป 92% … หากพื้นที่เก็บข้อมูลเต็ม คุณจะไม่สามารถบันทึกลงในไดรฟ์ สำรองข้อมูลไปยัง Google Photos หรือใช้ Gmail รับพื้นที่เก็บข้อมูลขนาด 100 GB ในราคา ฿70.00 ฿17.00/เดือน เป็นเวลา 3 เดือน
app.test.js
const { dayOfTheWeek } = require('./app');
const { monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});
test('getDay returns the month of the year', () => {
    const month = monthOfTheYear( new Date('3/11/2020') );
    expect( month ).toBe('March');
});