import styles from './layout.module.css'

export default function Layout({children}) {
    return (<>
    <div className={styles.container}>{children}
    <style jsx global>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          row-gap: 24px;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #20627e;
        }
        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Cabin, Helvetica Neue,
            sans-serif;
        }
      `}</style>
      </div>
    </>)
}