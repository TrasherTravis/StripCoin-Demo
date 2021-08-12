declare interface Value {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

declare interface Instructions {
    interval: number;
    getData: any;
    setDays: (a: number) => void;
    setHours: (a: number) => void;
    setMinutes: (a: number) => void;
    setIsOutdated: (a: boolean) => void
    setSeconds: (a: number) => void;
}

export const parseValue: (interval: number) => Value = (interval) => {
    const days = interval / (60 * 60 * 24)

    const absoluteDays = Math.floor(days);
    const hours = (days - absoluteDays) * 24
    const absoluteHours = Math.floor(hours);
    const minutes = (hours - absoluteHours) * 60;
    const absoluteMinutes = Math.floor(minutes);
    const seconds = (minutes - absoluteMinutes) * 60
    const absoluteSeconds = Math.floor(seconds)


    return {
        days: absoluteDays,
        hours: absoluteHours,
        minutes: absoluteMinutes,
        seconds: absoluteSeconds
    }
};

export const countdown: (p: Instructions) => void = (p) => {
    const {getData, setDays, setHours, setMinutes, setSeconds, setIsOutdated} = p;


    if (getData.hours === 0) {
        if (getData.days !== 0) {
            --getData.days;
            getData.hours = 24;
        }
    }
    if (getData.minutes === 0) {
        if(getData.hours !== 0) {
            --getData.hours;
            getData.minutes = 60;
        }
    }
    if (getData.seconds === 0) {
        if(getData.minutes !== 0) {
            getData.seconds = 60;
            --getData.minutes;
        }
    }

    --getData.seconds;



    if (getData.days === 0 && getData.hours === 0 && getData.minutes === 0 && getData.seconds === 0) {
        setIsOutdated(true);
        return;
    }

    setDays(getData.days);
    setHours(getData.hours);
    setMinutes(getData.minutes);
    setSeconds(getData.seconds);


    setTimeout(() => countdown(p), 1000)
}