export default function TodoList(props) {
  return (
    <section>
        <table className="table is-hoverable is-fullwidth">
            <tbody>
                {props.list.map((item) => {
                    return (
                        <tr key={item.key}>
                            <td>
                                {item.done && <del>{item.title}</del>}
                                {!item.done && item.title}
                            </td>
                            <td>
                                <button
                                    className="button is-succed"
                                    title="Done it"
                                    disabled={item.done}
                                    onClick = { (e) => props.setDone(item.key) }    
                                >
                                    &#9745;
                                </button>
                            </td>
                            <td>
                                <button
                                    className="button is-danger"
                                    title="Delete"
                                >
                                    &#9746;
                                </button>
                            </td>
                        </tr>
                    )
                })}            
            </tbody>
        </table>
    </section>
  )
}
