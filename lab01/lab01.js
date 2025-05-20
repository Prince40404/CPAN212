   const _ = require('lodash');

   const holidays = [
       { name: 'Christmas', date: new Date('2023-12-25') },
       { name: 'Canada Day', date: new Date('2023-07-01') },
       { name: 'New Year', date: new Date('2024-01-01') }
   ];

   const daysUntilHoliday = (holiday) => {
       const today = new Date();
       const timeDiff = holiday.date - today;
       return Math.ceil(timeDiff / (1000 * 3600 * 24));
   };

   holidays.forEach(holiday => {
       console.log(`Days until ${holiday.name}: ${daysUntilHoliday(holiday)}`);
   });

   const randomHoliday = _.sample(holidays);
   console.log(`Random Holiday: ${randomHoliday.name} on ${randomHoliday.date.toDateString()}`);

   const christmasIndex = _.findIndex(holidays, { name: 'Christmas' });
   const canadaDayIndex = _.findIndex(holidays, { name: 'Canada Day' });
   console.log(`Index of Christmas: ${christmasIndex}`);
   console.log(`Index of Canada Day: ${canadaDayIndex}`);
   