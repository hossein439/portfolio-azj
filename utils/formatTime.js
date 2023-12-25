import dayjs from "dayjs";

const formatTime = (date, format) => {
    return dayjs(date).format(format)
}

export default formatTime