import "./style.css";

import { from, fromEvent, of, range, tap } from "rxjs";

const stream$ = fromEvent(document.body, "click");

stream$.subscribe({
  next: (val) => {
    console.log(val);
  },
  complete: () => console.log("complete"),
});

console.log("of(): ");
of(1, 2, 3).pipe(tap(console.log)).subscribe();
of([1, 2, 3]).pipe(tap(console.log)).subscribe();
of({ 1: "1" }).pipe(tap(console.log)).subscribe();
of("Hello").pipe(tap(console.log)).subscribe();

console.log("from()");
// from(): Create Observable from array, array-like, iterable or promise
from([1, 2, 3]).pipe(tap(console.log)).subscribe();
from("HellO").pipe(tap(console.log)).subscribe();
from(Object.entries({ key1: "val1", key2: "val2" }))
  .pipe(tap(console.log))
  .subscribe();

console.log("range()");
range(1, 5).pipe(tap(console.log)).subscribe();
