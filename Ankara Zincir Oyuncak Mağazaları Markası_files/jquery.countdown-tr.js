(function($){$.countdown.regional['tr']={labels:['Yıl','Ay','Hafta','Gün','Saat','Dakika','Saniye'],labels1:['Yıl','Ay','Hafta','Gün','Saat','Dakika','Saniye'],compactLabels:['y','a','h',' gün'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['en']={labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['ar']={labels:['سنوات','أشهر','أسابيع','أيام','ساعات','دقائق','ثواني'],labels1:['سنة','شهر','أسبوع','يوم','ساعة','دقيقة','ثانية'],compactLabels:['س','ش','أ','ي'],whichLabels:null,digits:['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'],timeSeparator:':',isRTL:true};$.countdown.regional['az']={labels:['Yıl','Ay','Hafta','Gün','Saat','Dakika','Saniye'],labels1:['Yıl','Ay','Hafta','Gün','Saat','Dakika','Saniye'],compactLabels:['y','a','h',' gün'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['de']={labels:['Jahre','Monate','Wochen','Tage','Stunden','Minuten','Sekunden'],labels1:['Jahr','Monat','Woche','Tag','Stunde','Minute','Sekunde'],compactLabels:['J','M','W','T'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['es']={labels:['Años','Meses','Semanas','Días','Horas','Minutos','Segundos'],labels1:['Año','Mes','Semana','Día','Hora','Minuto','Segundo'],compactLabels:['a','m','s','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['fr']={labels:['Années','Mois','Semaines','Jours','Heures','Minutes','Secondes'],labels1:['Année','Mois','Semaine','Jour','Heure','Minute','Seconde'],compactLabels:['a','m','s','j'],whichLabels:function(amount){return(amount>1?0:1);},digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['il']={labels:['Anni','Mesi','Settimane','Giorni','Ore','Minuti','Secondi'],labels1:['Anno','Mese','Settimana','Giorno','Ora','Minuto','Secondo'],compactLabels:['a','m','s','g'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['il']={labels:['Anni','Mesi','Settimane','Giorni','Ore','Minuti','Secondi'],labels1:['Anno','Mese','Settimana','Giorno','Ora','Minuto','Secondo'],compactLabels:['a','m','s','g'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['ku']={labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['mk']={labels:['Години','Месеци','Недели','Дена','Часа','Минути','Секунди'],labels1:['Година','Месец','Недела','Ден','Час','Минута','Секунда'],compactLabels:['l','m','n','d'],compactLabels1:['g','m','n','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['nl']={labels:['Jaren','Maanden','Weken','Dagen','Uren','Minuten','Seconden'],labels1:['Jaar','Maand','Week','Dag','Uur','Minuut','Seconde'],compactLabels:['j','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['ro']={labels:['Ani','Luni','Saptamani','Zile','Ore','Minute','Secunde'],labels1:['An','Luna','Saptamana','Ziua','Ora','Minutul','Secunda'],compactLabels:['A','L','S','Z'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['ro']={labels:['Лет','Месяцев','Недель','Дней','Часов','Минут','Секунд'],labels1:['Год','Месяц','Неделя','День','Час','Минута','Секунда'],labels2:['Года','Месяца','Недели','Дня','Часа','Минуты','Секунды'],compactLabels:['л','м','н','д'],compactLabels1:['г','м','н','д'],whichLabels:function(amount){var units=amount%10;var tens=Math.floor((amount%100)/10);return(amount===1?1:(units>=2&&units<=4&&tens!==1?2:(units===1&&tens!==1?1:0)));},digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.regional['sr']={labels:['Година','Месеци','Недеља','Дана','Часова','Минута','Секунди'],labels1:['Година','месец','Недеља','Дан','Час','Минут','Секунда'],labels2:['Године','Месеца','Недеље','Дана','Часа','Минута','Секунде'],compactLabels:['г','м','н','д'],whichLabels:function(amount){return(amount===1?1:(amount>=2&&amount<=4?2:0));},digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false};$.countdown.setDefaults($.countdown.regional['tr']);})(jQuery);