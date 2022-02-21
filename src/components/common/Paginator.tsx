import React from 'react';
import styles from "../Navbar/Users/Users.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    goToFirstUserPage: () => void
    goToLastUserPage: () => void
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    if (props.currentPage === 1) {
        for (let i = props.currentPage; i < props.currentPage + 7; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === 2) {
        for (let i = props.currentPage - 1; i < props.currentPage + 6; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === 3) {
        for (let i = props.currentPage - 2; i < props.currentPage + 5; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount) {
        for (let i = props.currentPage - 6; i < props.currentPage + 1; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount - 1) {
        for (let i = props.currentPage - 5; i < props.currentPage + 2; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount - 2) {
        for (let i = props.currentPage - 4; i < props.currentPage + 3; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount - 3) {
        for (let i = props.currentPage - 3; i < props.currentPage + 4; i++) {
            pages.push(i)
        }
    } else for (let i = props.currentPage - 3; i < props.currentPage + 4; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.paginatorForUsers}>
                    <span onClick={props.goToFirstUserPage}
                          className={styles.arrowsForUsersButton}
                    >
                        ❮❮
                    </span>

            {pages.map((p, i) => {
                return <span
                    key={i}
                    style={{cursor: "pointer"}}
                    className={props.currentPage === p ? styles.selectedPage : styles.unSelectedPage}
                    onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })
            }

            <span onClick={props.goToLastUserPage}
                  className={styles.arrowsForUsersButton}
            >
                        ❯❯
                    </span>
        </div>
    );
};

export default Paginator;