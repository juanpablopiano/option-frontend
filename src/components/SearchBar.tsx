import React from 'react'
import { Col, Input, Row } from 'antd'
const { Search } = Input;

interface SearchBarProps {
    onClick: (keyword: string) => void;
    loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({onClick, loading,...props} ) => {
    return (
        <Row justify='center' style={{
            marginTop: '2rem',
        }}>
            <Col span={12}>
            <Search placeholder="Escriba el video que desea buscar" enterButton="Buscar" size="large" loading={loading} onSearch={onClick} {...props}  />
            </Col>
        </Row>
    )
}

export default SearchBar;