import { CiCirclePlus } from "react-icons/ci";
import styles from "./index.module.scss";
import MeetingToast from "../../components/MeetingToast";
import { calendarData } from "../../data";

const Calendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.heading}>
        <h1>Upcoming Meetings</h1>
        <CiCirclePlus fill="#4B93E7" />
      </div>
      {calendarData.map((dataObj) => {
        return (
          <div className={styles.calendarDay} key={dataObj.dayOrWeek}>
            <h2>{dataObj.dayOrWeek}</h2>
            <div>
              {dataObj.meetings.map((meeting) => {
                return (
                  <MeetingToast
                    key={meeting.id}
                    duration={meeting.duration}
                    timeOrDay={meeting.timeOrDay}
                    name={meeting.name}
                    description={meeting.description}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
