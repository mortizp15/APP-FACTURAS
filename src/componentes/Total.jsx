
export const Total = ({ total, totalSinIva }) => {
  return (
    <>
        <div className="text-end">
            <span className="badge bg-success me-2">Total Sin IVA: { totalSinIva } €</span>
            <span className="badge bg-success">Total + IVA: { total } €</span>
        </div>
    </>
  )
}
