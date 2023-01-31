export type JSONObject = object;

export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

declare global {
    // 扩展 window 成员
    interface Window {
        getMouthSyncValue: Function
    }

}