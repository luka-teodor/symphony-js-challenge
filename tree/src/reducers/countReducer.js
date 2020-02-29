export const INCR = 'INCR';
export const DECR = 'DECR';

export default function countReducer(expandedCount, action) {
  switch (action.type) {
    case INCR:
      return expandedCount + 1;
    case DECR:
      return expandedCount - 1;
    default:
      throw new Error(`${action.type} - wrong action type in count reducer!`);
  }
}
