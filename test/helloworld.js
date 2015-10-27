export var component =
    ul({id: 90, 'class': 789}, [].forEach((user, idx)=> {
        li({'class': idx === 0 ? 'first' : ''}, idx++ + '. ' + user.name)
    }));
