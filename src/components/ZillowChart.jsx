import SquaredComponent from "./SquaredCompoent"


const style = {
    display: 'flex',
    flexDirection: 'row',
}


const ZillowChart = ({ commits }) => {

    const pad = (n) => {
        n = n + '';
        return n.lenght >= 2 ? n : `0${n}`
    }


    const getDays = () => {
        const numDays = 31;

        return Array.from(Array(numDays)).map((o,i) => {
            return `2019-01-${pad(i + 1)}`
        })
    }



    const groupDates = (commits) => {

        const commitsPorFecha = {};

        commits.forEach(commit => {
            //const fechaCommit = new Date(commit.date).toDateString();
            
            if (!commitsPorFecha[commit.date]) {
              commitsPorFecha[commit.date] = [];
            }
            
            commitsPorFecha[commit.date].push(commit);
          });
      
          // Devolver el objeto con los commits agrupados por fecha
          return commitsPorFecha;

    }


    const aux = () => {
        const d = getDays()
    
    }
        


    return (
        <div style={style}>
            {
                //groupDates(commits).map((i, index) => <SquaredComponent key={index}/>)
                
            }

            <ul>
                {
                    getDays().map(date => <li key={date}>{date}</li>)
                }
            </ul>
        </div>
    )
}


export default ZillowChart