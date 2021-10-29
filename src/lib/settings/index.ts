export const join = (arr: []) :string => { return arr.join(", ")};

export const timeConvert = (n: number) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}min`;
};

export const yearConvert = (release_date: string) => {
    const newDate = new Date(release_date)
    return newDate.getFullYear();
};