"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Bell,
    BookOpen,
    Calendar,
    CreditCard,
    SignOut,
    Gear,
    User,
} from "@phosphor-icons/react";
import Container from "../components/Container";

export default function CuentaPage() {
    const [nombre, setNombre] = useState("María García");
    const [email, setEmail] = useState("maria@ejemplo.com");
    const [telefono, setTelefono] = useState("+34 612 345 678");

    // Datos de ejemplo para los cursos
    const cursos = [
        {
            id: 1,
            titulo: "Desarrollo Web Avanzado",
            instructor: "Carlos Rodríguez",
            progreso: 75,
            fechaInicio: "15/03/2025",
            imagen: "/placeholder.svg?height=80&width=80",
            estado: "En progreso",
        },
        {
            id: 2,
            titulo: "Diseño UX/UI Profesional",
            instructor: "Laura Martínez",
            progreso: 100,
            fechaInicio: "10/01/2025",
            imagen: "/placeholder.svg?height=80&width=80",
            estado: "Completado",
        },
        {
            id: 3,
            titulo: "Marketing Digital",
            instructor: "Javier López",
            progreso: 30,
            fechaInicio: "01/04/2025",
            imagen: "/placeholder.svg?height=80&width=80",
            estado: "En progreso",
        },
    ];

    return (
        <Container>
            <div className="container mx-auto py-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                    <Avatar className="h-20 w-20">
                        <AvatarImage
                            src="/placeholder.svg?height=80&width=80"
                            alt={nombre}
                        />
                        <AvatarFallback>
                            {nombre
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-3xl font-bold">{nombre}</h1>
                        <p className="text-muted-foreground">{email}</p>
                    </div>
                </div>

                <Tabs defaultValue="perfil" className="w-full">
                    <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:w-[600px]">
                        <TabsTrigger value="perfil">
                            <User className="h-4 w-4 mr-2 hidden sm:block" />
                            Perfil
                        </TabsTrigger>
                        <TabsTrigger value="cursos">
                            <BookOpen className="h-4 w-4 mr-2 hidden sm:block" />
                            Mis Cursos
                        </TabsTrigger>
                        <TabsTrigger value="pagos">
                            <CreditCard className="h-4 w-4 mr-2 hidden sm:block" />
                            Pagos
                        </TabsTrigger>
                        <TabsTrigger value="ajustes">
                            <Gear className="h-4 w-4 mr-2 hidden sm:block" />
                            Ajustes
                        </TabsTrigger>
                    </TabsList>

                    {/* Pestaña de Perfil */}
                    <TabsContent value="perfil">
                        <Card>
                            <CardHeader>
                                <CardTitle>Información Personal</CardTitle>
                                <CardDescription>
                                    Actualiza tu información personal y datos de
                                    contacto.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nombre">
                                        Nombre completo
                                    </Label>
                                    <Input
                                        id="nombre"
                                        value={nombre}
                                        onChange={(e) =>
                                            setNombre(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">
                                        Correo electrónico
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="telefono">Teléfono</Label>
                                    <Input
                                        id="telefono"
                                        value={telefono}
                                        onChange={(e) =>
                                            setTelefono(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">Biografía</Label>
                                    <textarea
                                        id="bio"
                                        className="w-full min-h-[100px] p-2 border rounded-md"
                                        placeholder="Cuéntanos sobre ti..."
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancelar</Button>
                                <Button>Guardar cambios</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Pestaña de Cursos */}
                    <TabsContent value="cursos">
                        <div className="grid gap-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">
                                    Mis Cursos
                                </h2>
                                <Button variant="outline">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Calendario de clases
                                </Button>
                            </div>

                            {cursos.map((curso) => (
                                <Card key={curso.id}>
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={
                                                        curso.imagen ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={curso.titulo}
                                                    className="w-full md:w-32 h-32 object-cover rounded-md"
                                                />
                                            </div>
                                            <div className="flex-grow space-y-3">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                    <h3 className="text-xl font-bold">
                                                        {curso.titulo}
                                                    </h3>
                                                    <Badge
                                                        variant={
                                                            curso.estado ===
                                                            "Completado"
                                                                ? "default"
                                                                : "secondary"
                                                        }
                                                    >
                                                        {curso.estado}
                                                    </Badge>
                                                </div>
                                                <p className="text-muted-foreground">
                                                    Instructor:{" "}
                                                    {curso.instructor}
                                                </p>
                                                <p className="text-sm">
                                                    Fecha de inicio:{" "}
                                                    {curso.fechaInicio}
                                                </p>
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-sm">
                                                        <span>Progreso</span>
                                                        <span>
                                                            {curso.progreso}%
                                                        </span>
                                                    </div>
                                                    <Progress
                                                        value={curso.progreso}
                                                        className="h-2"
                                                    />
                                                </div>
                                                <div className="pt-2">
                                                    <Button>
                                                        Continuar curso
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Pestaña de Pagos */}
                    <TabsContent value="pagos">
                        <Card>
                            <CardHeader>
                                <CardTitle>Historial de Pagos</CardTitle>
                                <CardDescription>
                                    Revisa tus pagos y facturas de cursos.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-md border">
                                    <div className="grid grid-cols-4 p-4 font-medium border-b">
                                        <div>Curso</div>
                                        <div>Fecha</div>
                                        <div>Monto</div>
                                        <div>Estado</div>
                                    </div>
                                    <div className="grid grid-cols-4 p-4 border-b">
                                        <div>Desarrollo Web Avanzado</div>
                                        <div>15/03/2025</div>
                                        <div>€99.99</div>
                                        <div>
                                            <Badge
                                                variant="outline"
                                                className="bg-green-50"
                                            >
                                                Pagado
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 p-4 border-b">
                                        <div>Diseño UX/UI Profesional</div>
                                        <div>10/01/2025</div>
                                        <div>€129.99</div>
                                        <div>
                                            <Badge
                                                variant="outline"
                                                className="bg-green-50"
                                            >
                                                Pagado
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 p-4">
                                        <div>Marketing Digital</div>
                                        <div>01/04/2025</div>
                                        <div>€79.99</div>
                                        <div>
                                            <Badge
                                                variant="outline"
                                                className="bg-green-50"
                                            >
                                                Pagado
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    Descargar todas las facturas
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Pestaña de Ajustes */}
                    <TabsContent value="ajustes">
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Notificaciones</CardTitle>
                                    <CardDescription>
                                        Configura cómo quieres recibir
                                        notificaciones.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Bell className="h-4 w-4" />
                                            <span>
                                                Notificaciones por correo
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="email-notif"
                                                className="rounded"
                                                defaultChecked
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Bell className="h-4 w-4" />
                                            <span>
                                                Notificaciones de nuevas clases
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="class-notif"
                                                className="rounded"
                                                defaultChecked
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Bell className="h-4 w-4" />
                                            <span>
                                                Notificaciones de promociones
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="promo-notif"
                                                className="rounded"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Seguridad</CardTitle>
                                    <CardDescription>
                                        Gestiona tu contraseña y seguridad de la
                                        cuenta.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="current-password">
                                            Contraseña actual
                                        </Label>
                                        <Input
                                            id="current-password"
                                            type="password"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="new-password">
                                            Nueva contraseña
                                        </Label>
                                        <Input
                                            id="new-password"
                                            type="password"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">
                                            Confirmar contraseña
                                        </Label>
                                        <Input
                                            id="confirm-password"
                                            type="password"
                                        />
                                    </div>
                                    <Button>Actualizar contraseña</Button>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start gap-4">
                                    <div className="w-full pt-4 border-t">
                                        <Button
                                            variant="destructive"
                                            className="flex items-center"
                                        >
                                            <SignOut className="mr-2 h-4 w-4" />
                                            Cerrar sesión en todos los
                                            dispositivos
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Container>
    );
}
