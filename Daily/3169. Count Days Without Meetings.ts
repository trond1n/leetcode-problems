function countDays(days: number, meetings: number[][]): number {
    if (meetings.length === 0) return days;
 
     // Сортируем встречи по начальному дню
     meetings.sort((a, b) => a[0] - b[0]);
 
     let occupiedDays = 0;
     let prevEnd = 0;
 
     for (const [start, end] of meetings) {
         // Если текущая встреча начинается после окончания предыдущей
         if (start > prevEnd) {
             occupiedDays += (end - start + 1);
         } else {
             // Если встречи пересекаются, добавляем только разницу между текущим концом и предыдущим концом
             occupiedDays += Math.max(0, end - prevEnd);
         }
 
         // Обновляем prevEnd
         prevEnd = Math.max(prevEnd, end);
     }
 
     return days - occupiedDays;
 };