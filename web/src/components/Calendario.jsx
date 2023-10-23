import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';
import { useEffect } from 'react';

const Calendario = () => {

    useEffect(() => {
        axios.get()
    })
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale={ptBRLocale}
        />
    )
}

export default Calendario