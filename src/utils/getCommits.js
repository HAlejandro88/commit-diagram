const pad = (n) => {
    return n > 9 ? `${n}` : `0${n}`
}


const getDays = () => {
    const numDays = 31;

    return Array.from(Array(numDays)).map((o,i) => {
        return `2019-01-${pad(i + 1)}`
    })
}





const groupDates = (commits) => {

    const commitsPorFecha = {};

    const fechas = getDays();

    // Inicializar el objeto con las fechas
    fechas.forEach(fecha => {
      commitsPorFecha[fecha] = [];
    });



    commits.forEach(commit => {
        //const fechaCommit = new Date(commit.date).toDateString();
        //console.log(commit);
        //console.log(commitsPorFecha['2019-01-10'], 'diez');

      if (commitsPorFecha[commit.date]) {

        commitsPorFecha[commit.date].push(commit)
      } 
  
      // Devolver el objeto con los commits agrupados por fecha
      
    })

    return commitsPorFecha;
}


const opcionTwo = (commits) => {
    const dates = [...commits].map(i => i.date).sort()

    const fechas = getDays()

    let completDates = []

    for( let d of fechas) {
        if(!dates.includes(d)) {
            completDates.push(d)
        }
    }

    console.log(completDates);
    
    
}


export const getCommits = async() => {
    try {
      const data = await(await fetch('https://tinyurl.com/37wzwx5v')).json()
      return groupDates(data)
    } catch (error) {
      console.error(error)
    }
}


