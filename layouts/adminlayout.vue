<template>
    <AdminLayoutTheSideBar></AdminLayoutTheSideBar>
    
    <div>
        
        <div class="lg:pl-72">
            <AdminLayoutTheHeader></AdminLayoutTheHeader>
            
            <main class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <slot></slot>
                </div>
            </main>
        </div>
    </div>
</template>