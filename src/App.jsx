import MainLayout from './components/layout/MainLayout'
import Hero from './components/sections/Hero'
import ProductCategories from './components/sections/ProductCategories'

function App() {
  return (
    <MainLayout>
      {/* Removing Container as Hero and ProductCategories now handle their own padding/layout for simplified stacked design */}
      <Hero />
      <ProductCategories />
    </MainLayout>
  )
}

export default App
