'use strict';

class DatePicker {
    constructor(divId, dateSelectedCallback) {
      this.divId = divId;
      this.dateSelectedCallback = dateSelectedCallback;
      this.currentDate = new Date();
      this.selectedDate = {
        month: this.currentDate.getMonth() + 1,
        day: this.currentDate.getDate(),
        year: this.currentDate.getFullYear(),
      };
      this.monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December',
      ];
    }

    render(selectedMonth) {
      const calendarDiv = document.getElementById(this.divId);
      calendarDiv.innerHTML = '';
  
      // Create calendar header
      const header = document.createElement('div');
      header.className = 'calendar-header';
      header.innerHTML = `
        <button class="prev-month" onclick="datePicker1.prevMonth('selectedMonth')">&#60;</button>
        <div class="month-year">${this.monthNames[selectedMonth.getMonth()]} ${selectedMonth.getFullYear()}</div>
        <button class="next-month" onclick="datePicker1.nextMonth('selectedMonth')">&#62;</button>
      `;
      calendarDiv.appendChild(header);
  
      // Create day headers (Su, Mo, Tu, etc.)
      const dayHeader = document.createElement('div');
      dayHeader.className = 'day-header';
      const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      for (const day of daysOfWeek) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        dayCell.textContent = day;
        dayHeader.appendChild(dayCell);
      }
      calendarDiv.appendChild(dayHeader);
  
      // Create calendar grid
      const calendarGrid = document.createElement('div');
      calendarGrid.className = 'calendar-grid';
  
      const selectedYear = selectedMonth.getFullYear();
      const selectedMonthIndex = selectedMonth.getMonth();
      const firstDayOfMonth = new Date(selectedYear, selectedMonthIndex, 1);
      const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
      const lastDayOfMonth = new Date(selectedYear, selectedMonthIndex + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      
      // Calculate the date of the last day of the previous month
      const lastDayOfPreviousMonth = new Date(selectedYear, selectedMonthIndex, 0);
      const daysInPreviousMonth = lastDayOfPreviousMonth.getDate();
      
      // Create date cells for the days of the previous month
      for (let day = daysInPreviousMonth - firstDayOfWeek + 1; day <= daysInPreviousMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'date-cell inactive';
        dateCell.textContent = day;
        calendarGrid.appendChild(dateCell);
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'date-cell';
        dateCell.textContent = day;
      
        if (
          day === this.selectedDate.day &&
          selectedMonthIndex === this.selectedDate.month - 1 &&
          selectedYear === this.selectedDate.year
        ) {
          dateCell.classList.add('selected');
        }
      
        dateCell.addEventListener('click', () => this.handleDateClick(day));
      
        calendarGrid.appendChild(dateCell);
      }
      
      calendarDiv.appendChild(calendarGrid);
    }

    handleDateClick(day) {
      if (!day || day < 1) return;
      this.selectedDate = {
        month: this.currentDate.getMonth() + 1,
        day,
        year: this.currentDate.getFullYear(),
      };
      this.dateSelectedCallback(this.divId, this.selectedDate);
      this.render(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()));
    }
  
    prevMonth(selectedMonth) {
      //this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
      //this.render(this.currentDate);

      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.render(this.currentDate);
    }
  
    nextMonth(selectedMonth) {
      
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
      this.render(this.currentDate);
    }


    render2(selectedMonth) {

      //console.log(selectedMonth);

      const calendarDiv = document.getElementById(this.divId);
      calendarDiv.innerHTML = '';
  
      // Create calendar header
      const header = document.createElement('div');
      header.className = 'calendar-header';
      header.innerHTML = `
        <button class="prev-month" onclick="datePicker2.prevMonth2(${selectedMonth.getTime()})">&#60;</button>
        <div class="month-year">${this.monthNames[selectedMonth.getMonth()]} ${selectedMonth.getFullYear()}</div>
        <button class="next-month" onclick="datePicker2.nextMonth2(${selectedMonth.getTime()})">&#62;</button>
      `;
      calendarDiv.appendChild(header);
  
      // Create day headers (Su, Mo, Tu, etc.)
      const dayHeader = document.createElement('div');
      dayHeader.className = 'day-header';
      const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      for (const day of daysOfWeek) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        dayCell.textContent = day;
        dayHeader.appendChild(dayCell);
      }
      calendarDiv.appendChild(dayHeader);
  
      // Create calendar grid
      const calendarGrid = document.createElement('div');
      calendarGrid.className = 'calendar-grid';
  
      const selectedYear = selectedMonth.getFullYear();
      const selectedMonthIndex = selectedMonth.getMonth();
      const firstDayOfMonth = new Date(selectedYear, selectedMonthIndex, 1);
      const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
      const lastDayOfMonth = new Date(selectedYear, selectedMonthIndex + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      
      // Calculate the date of the last day of the previous month
      const lastDayOfPreviousMonth = new Date(selectedYear, selectedMonthIndex, 0);
      const daysInPreviousMonth = lastDayOfPreviousMonth.getDate();
      
      // Create date cells for the days of the previous month
      for (let day = daysInPreviousMonth - firstDayOfWeek + 1; day <= daysInPreviousMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'date-cell inactive';
        dateCell.textContent = day;
        calendarGrid.appendChild(dateCell);
      }
            
      for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'date-cell';
        dateCell.textContent = day;
      
        if (
          day === this.selectedDate.day &&
          selectedMonthIndex === this.selectedDate.month - 1 &&
          selectedYear === this.selectedDate.year
        ) {
          dateCell.classList.add('selected');
        }
      
        dateCell.addEventListener('click', () => this.handleDateClick2(day, selectedMonth));
      
        calendarGrid.appendChild(dateCell);
      }
      
      calendarDiv.appendChild(calendarGrid);
    }

    handleDateClick2(day, selectedMonth) {
      if (!day || day < 1) return;
      this.selectedDate = {
        //month: this.currentDate.getMonth() + 1,
        month: selectedMonth.getMonth() + 1,
        day,
        //year: this.currentDate.getFullYear(),
        year: selectedMonth.getFullYear(),
      };
      this.dateSelectedCallback(this.divId, this.selectedDate);
      //this.render2(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()));
      this.render2(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth()));
    }
  
    prevMonth2(selectedMonth) {
      //this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
      //this.render(this.currentDate);

      //console.log(selectedMonth);

      const selectedMonth2 = new Date(selectedMonth);
      //console.log(selectedMonth2);

      selectedMonth2.setMonth(selectedMonth2.getMonth() - 1);
      this.render2(selectedMonth2);
      //this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      //this.render2(this.currentDate);

    }
  
    nextMonth2(selectedMonth) {
      //this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);

      //console.log(selectedMonth);
      //console.log(this.currentDate);
      
      //selectedMonth.setMonth(selectedMonth.getMonth() + 1);
      //this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      const selectedMonth2 = new Date(selectedMonth);
      //console.log(selectedMonth2);

      selectedMonth2.setMonth(selectedMonth2.getMonth() + 1);
      //this.render2(this.currentDate);
      this.render2(selectedMonth2);
    }

  }
  