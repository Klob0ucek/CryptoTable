import {FC} from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table/table.tsx";
import {Placeholder} from "../ui/placeholder/Placeholder.tsx";
import {cn} from "../../utils.ts";

type CurrencyTableLoaderProps = {
    className?: string;
}

const CurrencyTableLoader: FC<CurrencyTableLoaderProps> = ({className}) => {
    return (
        <Table className={cn(className)}>
            <TableHeader>
                <TableRow>
                    <TableHead >Rank</TableHead>
                    <TableHead >Symbol</TableHead>
                    <TableHead >Name</TableHead>
                    <TableHead >Price</TableHead>
                    <TableHead >Last 24 hours</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {new Array(10).fill(null).map((_, index) => (
                    <TableRow key={index}>
                        <TableCell >
                            <Placeholder/>
                        </TableCell>
                        <TableCell >
                            <Placeholder/>
                        </TableCell>
                        <TableCell >
                            <Placeholder/>
                        </TableCell>
                        <TableCell >
                            <Placeholder/>
                        </TableCell>
                        <TableCell>
                            <Placeholder/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CurrencyTableLoader;