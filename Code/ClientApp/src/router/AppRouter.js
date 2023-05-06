import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import Layout from '../pages/Layout';
import Dashboard from '../pages/dashboard/Dashboard'
import Inventario from '../pages/inventario/Inventario'
import AgregarProducto from '../pages/inventario/AgregarProducto';

{ /* Componente para controlar la navegacion con rutas */ }
const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="inventario" element={<Inventario />} />
                    <Route path="inventario/agregar" element={<AgregarProducto />} />
                    { /*<Route path="inventario/editar:sku" element={<EditarProducto />} />*/}
                    { /*<Route path="inventario/producto:sku" element={<VerProducto />} />*/}
                    { /*<Route path="ordenes" element={<Ordenes />} />*/}
                    { /*<Route path="ordenes/agregar" element={<AgregarOrden />} />*/}
                    { /*<Route path="ordenes/editar:id" element={<EditarOrden />} />*/}
                    { /*<Route path="ordenes/orden:id" element={<VerOrden />} />*/}
                    { /*<Route path="clientes" element={<Clientes />} />*/}
                    { /*<Route path="clientes/agregar" element={<AgregarCliente />} />*/}
                    { /*<Route path="clientes/editar:id" element={<EditarCliente />} />*/}
                    { /*<Route path="clientes/orden:id" element={<VerCliente />} />*/}
                    { /*<Route path="agenda" element={<Agenda />} />*/}
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default AppRouter;