import {Header, DataTransactions} from '../../components';
import {userDatas} from "../../assets/data/userData";
import Table from 'react-bootstrap/Table';

import './transactions.scss';

const Transactions = () => {
    return (
        <div className="transactions-page">
            <Header/>
            <div className="container mt-3">
                <div className="row">
                    <div className="page-title">Incoming Transactions</div>
                    <Table striped  hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Users</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status User</th>
                        <th>Status Payment</th>
                        <th className="d-flex justify-content-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userDatas.map((datatransactions) => (
                                <DataTransactions 
                                    datatransactions = {datatransactions}
                                    key={datatransactions.id}
                                />
                                // <tr>
                                //     <td>{userData.id}</td>
                                //     <td>{userData.user}</td>
                                //     <td>{userData.paymentEvidence}</td>
                                //     <td>{userData.activeDay} / Hari</td>
                                //     <td className={userData.statusUser}>{userData.statusUser}</td>
                                //     <td className={userData.statusPayment}>{userData.statusPayment}</td>
                                //     <td><div className="d-flex justify-content-center"><img src={ActionArrow}></img></div></td>
                                // </tr>
                            ))
                        }
                    </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Transactions