export const setToLS = (key: string, value: string): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string): string | null => {
    const value = window.localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
};
