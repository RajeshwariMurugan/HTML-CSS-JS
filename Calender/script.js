document.addEventListener("DOMContentLoaded", function() {
    const calendarDays = document.getElementById("calendar-days");
    const monthYearDisplay = document.getElementById("month-year");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");

    let currentDate = new Date();

    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    // Function to render the calendar
    function renderCalendar(date) {
        calendarDays.innerHTML = "";  // Clear previous days
        const month = date.getMonth();
        const year = date.getFullYear();

        // Get the first day of the month
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        // Get the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Update month and year display
        monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

        // Add empty divs for days of the previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("empty");
            calendarDays.appendChild(emptyDiv);
        }

        // Add the days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = day;
            calendarDays.appendChild(dayDiv);
        }
    }

    // Event listeners for changing months
    prevMonthBtn.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initial render
    renderCalendar(currentDate);
});
