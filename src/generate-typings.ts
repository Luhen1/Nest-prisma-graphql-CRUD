import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
const definitionFactory = new GraphQLDefinitionsFactory();
definitionFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/graphsql.ts'),
    outputAs: 'class',
});
