
/* функция для выведения даты в формате год-месяц-день */

export function getCurrentDateISO(startParam: string, endParam: string) {
    const startTime = new Date(startParam).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).split('.').reverse().join('-');
    const endTime = new Date(endParam).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).split('.').reverse().join('-');
    return { startTime, endTime }
} 