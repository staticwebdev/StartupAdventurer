export interface Action<T, P> {
	readonly type: T;
	readonly payload: P;
	readonly typed: boolean;
}

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
	return { type, payload, typed: true };
}