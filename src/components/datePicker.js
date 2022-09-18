import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
}