import React from "react"

export default interface ProductCard {
    info: string
    btnClose: React.ReactElement
    btnConfirm: React.ReactElement
    render: () => React.ReactElement
}