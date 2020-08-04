const hanoi = (count, source, aux, destination, moves = []) => {
  if (count === 1) {
    moves.push({
      'disk': 1,
      'from': source,
      'to': destination
    });
  } else {
    hanoi(count - 1, source, destination, aux, moves);

    moves.push({
      'disk': count,
      'from': source,
      'to': destination
    });

    hanoi(count - 1, aux, source, destination, moves);
  }
  return moves;
}

const moves = hanoi(3, 'A', 'B', 'C');
moves.forEach(move => console.log(`moved ${move.disk} from: ${move.from} to: ${move.to}`));
